defmodule MyTrelloWeb.PageController do
  use MyTrelloWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
