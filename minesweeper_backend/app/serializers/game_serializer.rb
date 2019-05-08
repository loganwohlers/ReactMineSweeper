class GameSerializer < ActiveModel::Serializer
     attributes :user_id, :difficulty, :score
     belongs_to :user
end