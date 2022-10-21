class PagesController < ApplicationController
  def home
  end

  def download_pdf
  send_file(
    "#{Rails.root}/public/Jenna_Castillo_full_stack.pdf",
    filename: "Jenna_Castillo.pdf",
    type: "application/pdf"
  )
end
end
