namespace Backend.Api.Users.Models.User
{
    public class PostUserModel
    {
        public string GotchiUrl { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateOnly DateOfBirth { get; set; }
    }
}
