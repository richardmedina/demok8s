namespace Backend.Api.Users.Models.User
{
    public class UserModel
    {
        public long Id { get; set; }
        public string GotchiUrl { get; set; } = "https://picsum.photos/286/180";
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateOnly DateOfBirth { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
