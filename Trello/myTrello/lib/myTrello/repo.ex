defmodule MyTrello.Repo do
  use Ecto.Repo,
    otp_app: :myTrello,
    adapter: Ecto.Adapters.Postgres
end
