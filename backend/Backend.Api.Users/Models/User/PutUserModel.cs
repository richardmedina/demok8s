namespace Backend.Api.Users.Models.User
{
    public record PutUserModel(
        long Id,
        string GotchiUrl,
        string FirstName,
        string LastName,
        DateOnly DateOfBirth,
        DateTime CreatedDate,
        DateTime ModifiedDate
    );
}
