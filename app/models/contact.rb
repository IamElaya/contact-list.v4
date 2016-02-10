class Contact < ActiveRecord::Base

   # validates :url, presence: true, length: { maximum: 40 }
   # validates :content, presence: true, length: { maximum: 140 }
   # validates :author, presence: true, length: { maximum: 25 }

   # def to_json
   #  { :name => name, :email => email }.to_json
   # end

end

# rest_json Contact, :authenticate => {
#   :all => lambda { true }, # allowed
#   :find => lambda { true }, #allowed 
#   :create => lambda { false }, #not authorized
#   :update => lambda { false }, #not authorized
#   :delete => lambda { false }  #not authorized
# }