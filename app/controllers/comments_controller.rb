class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find_by(id: session[:comment_id])

        if comment
            render json: comment
        else
            render json: {error: "Not found"}, status: :not_found
        end
    end

end
