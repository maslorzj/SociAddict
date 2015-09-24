class UploadsController < ApplicationController
  include Cloudinary::CarrierWave  
  def index
    @upload = Upload.new
  end

  def new
  	@upload = Upload.new
  end

  def create
  	@upload = Upload.new(upload_params)
  	if @upload.save
  	  render json: { message: "success" }, :status => 200
      respond_to do |format|
         format.json{ render :json => @upload }
      end
  	else
  	  #  you need to send an error header, otherwise Dropzone
          #  will not interpret the response as an error:
  	  render json: { error: @upload.errors.full_messages.join(',')}, :status => 400
  	end  		
  end
  
  def destroy
    @upload = Upload.find(params[:id])
    @upload.destroy
  end

  private
  def upload_params
  	params.require(:upload).permit(:name, :attachment)
  end
end
