# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :myTrello,
  ecto_repos: [MyTrello.Repo]

# Configures the endpoint
config :myTrello, MyTrelloWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "mzeQmm1ZPLha5fKaM+MkqoP+CET5p5G72/DegB2G4m1uUOR0Z4cghamOptBxYY+2",
  render_errors: [view: MyTrelloWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: MyTrello.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
