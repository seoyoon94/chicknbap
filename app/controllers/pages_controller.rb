class PagesController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.js { render layout: 'content' }
    end
  end

  def about
    respond_to do |format|
      format.html
      format.js { render layout: 'content' }
    end

  end

  def menu
    respond_to do |format|
      format.html
      format.js { render layout: 'content' }
    end
  end

  def contact
    respond_to do |format|
      format.html
      format.js { render layout: 'content' }
    end
  end

  def hours
    respond_to do |format|
      format.html
      format.js { render layout: 'content' }
    end
  end
end
