using System;
using System.Collections.Generic;

namespace DrawWiz.Domain.Entities;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public string? AvatarUrl { get; set; }

    public bool IsPremium { get; set; }

    public bool IsActive { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<Album> Albums { get; set; } = new List<Album>();

    public virtual ICollection<ChildAccount> ChildAccounts { get; set; } = new List<ChildAccount>();

    public virtual ICollection<FavoriteDrawing> FavoriteDrawings { get; set; } = new List<FavoriteDrawing>();

    public virtual ICollection<UserSubscription> UserSubscriptions { get; set; } = new List<UserSubscription>();

    public virtual ICollection<Role> Roles { get; set; } = new List<Role>();
}
