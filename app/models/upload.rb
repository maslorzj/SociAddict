class Upload < ActiveRecord::Base
	mount_uploader :upload, UploadUploader
end
