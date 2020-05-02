class CreatePrices < ActiveRecord::Migration[6.0]
  def change
    create_table :prices do |t|
      t.decimal :average_amount

      t.timestamps
    end
  end
end
