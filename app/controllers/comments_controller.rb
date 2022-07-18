class CommentsController < ApplicationController


    def index
        if params[:user_id]
            user = User.find_by(params[:user_id])
            comments = user.comment
        else
            comments = Comment.all
        end
        render json: comments, include: :user
    end

    def show
        comment = Comment.find_by(id: params[:id])
        render json: comment
    end

    def create
        comment = Comment.create(comment_params)
        if comment.valid?
            render json: comment, include: :user, status: :created
        else
            render json: {error: comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.update(comment_params)
            render json: comment, include: :user, status: :created
        else
            render json: {error: "Comment not found"}, status: :not_found
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content
        else
            render json: {error: "Comment not found"}, status: :not_found
        end
    end

    private

    def comment_params
        params.permit(:content, :user_id, :picture_id)
    end

end
