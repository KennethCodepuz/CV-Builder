import UserInfo from "./formComponents/UserInfo"

export default function ResumeForm({ handleSubmit }) {
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <UserInfo />
          <button type="submit" className="form-btn">Save</button>
        </form>
      </div>
    </>
  )
}