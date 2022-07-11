class PicturesController < ApplicationController

    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            pictures = user.pictures
        else
            pictures = Picture.all
        end        
        render json: pictures, include: :user
    end

    def show
        picture = Picture.find_by(id: params[:id])
        render json: picture
    end
    
    def create
        picture = Picture.create(picture_params)
        render json: picture, status: :created
    end

    private

    def picture_params
        params.permit(:image, :caption, :user_id)
    end

end