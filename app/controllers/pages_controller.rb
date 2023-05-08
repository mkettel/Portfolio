class PagesController < ApplicationController
  skip_before_action :authenticate_user!

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

  def filmyj
  end

  def grassroots
  end

  def show_pdf
    send_file 'Matthew Kettelkamp Resume.pdf', type: 'application/pdf', disposition: 'inline'
  end

end
