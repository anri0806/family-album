class PicturesController < ApplicationController

    def index
        pictures = Picture.all
        render json: pictures
    end

    def show
        picture = Picture.find_by(id: params[:id])
        render json: picture
    end

end
