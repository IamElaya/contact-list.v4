# require 'active_record'
# require_relative "../../app/models/contact.rb"


def create_contact
   field_names = ['firstname', 'lastname', 'email']
    failure_count = 0 
    Contact.transaction do 
      File.open("db/data/contacts.csv").each do |line|
        data = line.chomp.split(',')
        attribute_hash = Hash[field_names.zip(data)]
        begin 
          print attribute_hash
          Contact.create!(attribute_hash)
          print '.'
        rescue ActiveRecord::UnknownAttributeError
          failure_count += 1
          print '!'
        ensure 
          STDOUT.flush
        end
      end
    end
    failures = failure_count > 0 ? "(failed to create #{failure_count} contact records)" : ''
    puts "\nDone #{failures}\n\n"
  end

  create_contact