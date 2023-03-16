class MessagesController < ApplicationController
  def index
    @messages = Message.order('RANDOM()').first
    render json: @messages, only: [:content, :id], status: 200
  end
end
