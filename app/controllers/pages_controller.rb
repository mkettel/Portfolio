class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def experiment
  end

  def avtechdaddy
  end

  def defit
  end

  def deepwork
  end

end
