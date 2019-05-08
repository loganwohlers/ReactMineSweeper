class GameSerializer < ActiveModel::Serializer
     attributes :id, :difficulty, :score
     belongs_to :user
end
