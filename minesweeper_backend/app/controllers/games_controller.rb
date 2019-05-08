class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @games = Game.all.order(difficulty: :asc)
    render json: @games

  end

    def create
      @game = Game.create(
        user_id: params["user_id"],
        score: params["score"],
        difficulty: params["difficulty"]
        )

      render json: @game
  end

end
