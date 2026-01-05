using System;
using System.Collections.Generic;

namespace DrawWiz.Domain.Entities;

public partial class ChildAccount
{
    public int ChildId { get; set; }

    public int ParentUserId { get; set; }

    public string ChildName { get; set; } = null!;

    public string? AvatarUrl { get; set; }

    public DateTime CreatedAt { get; set; }

    public bool IsActive { get; set; }

    public virtual ICollection<Album> Albums { get; set; } = new List<Album>();

    public virtual User ParentUser { get; set; } = null!;

    public virtual ICollection<UserSubscription> UserSubscriptions { get; set; } = new List<UserSubscription>();
}
