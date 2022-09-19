/*<%- include('partials/header') -%>
<div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-6">
      <h2><%= post.title %></h2>
      <img class="img-fluid" src="<%= post.image%>" />
      <div class="row justify-content-between">

        
        <form
          class="col-1"
          action="/post/likePost/<%= post.id %>?_method=PUT"
          method="POST"
        >
        
          <button class="btn btn-primary fa fa-heart" type="submit"></button>
          

        </form>
        <h3 class="col-3">Likes: <%= post.likes %></h3>
        <%if(post.user == user.id){ %>
        <form
          action="/post/deletePost/<%= post.id %>?_method=DELETE"
          method="POST"
          class="col-3"
        >
          <button class="btn btn-primary fa fa-trash" type="submit"></button>
        </form>
        <%}%>
      </div>
    </div>
    <div class="col-3 mt-5">
      <p><%= post.caption %></p>
    </div>

    <div class="mt-5">
      <h2>Add a Comment
      </h2>
      <form action="/comment/createComment/<%=post._id%>"  method="POST">
        <div class="mb-3">
            <label for="comment" class="form-label">Comment</label>
            <input type="text" class="form-control" id="comment" name="comment">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    
    <ul>
      <% for(var i=0; i<comments.length; i++) {%>
        <li class="col-6 justify-content-between mt-5">
          <%= comments[i].comment%>
        </li>
      <% } %>
    </ul>
    
    <div class="col-6 mt-5">
      <a class="btn btn-primary" href="/profile">Return to Profile</a>
      <a class="btn btn-primary" href="/feed">Return to Feed</a>
    </div>
  </div>
</div>

<%- include('partials/footer') -%>

*/
