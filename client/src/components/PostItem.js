import React from 'react'

export default function PostItem() {
  return (
    <div className="post-item">
    <p className="post-content">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto praesentium, doloribus vel earum, nisi aspernatur sit autem eveniet hic deserunt temporibus ipsum consequatur nihil voluptate nam non obcaecati officia perspiciatis.
    </p>
    <div className="post-footer">
      <div className="post-info">
        <span>by PHIDNDEV</span>
        <span>Date: 5:02 PM Mar 18, 2021</span>
      </div>
      <div className="post-edit-delete">
        <span>Edit</span>
        <span>Delete</span>
        <span className="delete-question">Are you sure?</span>
        <span>Yes</span>
        <span>No</span>
      </div>
    </div>
    <div className="post-edit-form">
      <form className="form form-edit">
        <textarea type="text" name="content" id="content" className="content" placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto praesentium, doloribus vel earum, nisi aspernatur sit autem eveniet hic deserunt temporibus ipsum consequatur nihil voluptate nam non obcaecati officia perspiciatis." defaultValue={""} />
        <div className="btn-container">
          <button className="btn" type="submit">Update</button>
          <button className="btn" type="submit">Cancel</button>                
        </div>
      </form>
    </div>
  </div>
  )
}
