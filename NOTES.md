****
# __Project Notes__
****

## js date
- momentjs package

## Assigment: Build-A-Blog - Frontend

This week's assignment is to build a React app for a blog.

Your blog display needs a:
  - header,
  - main content area, and
  - footer.

Your main content area needs to have a:
  - main area for actual content and
  - at least one sidebar.

Your site also needs a:
  - navigation bar that takes users to:
    - blog posts,
    - about page, and a
    - recommended links links page.

Your blog posts should include a:
  - date-time entry and
  - tags.

Your sidebar should include a:
  - list of months when a blog entry has been made, along with a
  - list of tags used on blogs.
  - Clicking on a month or tag should show a:
    - filtered list of blog entries.

The initial working version is due by Wednesday evening.

****
## Planning
****
### Layout
- responsive
- Grid and Flexbox:
- vw, em, %

### Summary
- [x] header
- [ ] main content
- [x] sidebar(or two)  
  - [ ] months: blog entry made
  - [ ] list of tags
  - [ ] on click: filtered list of blog entries  
- [x] nav bar
- [ ] blog posts
  - [ ] date-time
  - [ ] tags
- [x] about page
  - [ ] fill in page
- [ ] Links page
- [x] recommended links


### Another Todo List
- [ ] Content
  - [ ] About
  - [ ] Links

### Assignment
This week's assignment is to build a React app for a blog.

- [x] Your blog display needs a header, main content area, and footer.
- [x] Your main content area needs to have a main area for actual content and at least one sidebar.
- [x] Your site also needs a navigation bar that takes users to blog posts, an about page, and a recommended links links page.
- [ ] Your blog posts should include a date-time entry and tags.
- [ ] Your sidebar should include a list of months when a blog entry has been made, along with a
- [ ] list of tags used on blogs.
- [ ] Clicking on a month or tag should show a filtered list of blog entries.



{
posts.map((p, i) => (
  <Format key={i} post={p}/>
))
}




<div>
  <h1>{post.date} {post.title} </h1>
  <div className="styling-for-the-post">
    <p>
      {post.content}
    </p>
    <p>
      tags: {post.tags}
    </p>
  </div>
</div>



{
postsObj.map((p, i) => (
  <Format key={i} post={p}/>
))
}




{
this.props.posts.posts.map((p, i) => (
  <Format key={i} post={p}/>
))
}

Format.js
<div>
  <h1>{post.date} {post.title} </h1>
  <div className="styling-for-the-post">
    <p>
      {post.content}
    </p>
    <p>
      tags: {post.tags}
    </p>
  </div>
</div>
