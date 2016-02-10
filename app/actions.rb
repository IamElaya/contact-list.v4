# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  contacts = Contact.all

  # contacts = contacts.where("name ILIKE ?", params[:name]) if params[:name].present?

  contacts.to_json
end

post '/contacts' do
  firstname = params[:firstname]
  lastname = params[:lastname]
  email = params[:email]
  results = {result: false}

  contact = Contact.new(firstname: firstname, lastname: lastname, email: email)
  if contact.save
    results[:result] = true
    results[:id] = contact.id
  end
  results.to_json
end

get '/contacts/:id' do
  contact = Contact.find(params[:id])
  contact.to_json
end