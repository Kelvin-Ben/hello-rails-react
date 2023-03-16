# frozen_string_literal: true

class MessagesController < ApplicationController
  def index
    @messages = Message.order('RANDOM()').first
    render json: @messages, only: %i[content id], status: :ok
  end
end
