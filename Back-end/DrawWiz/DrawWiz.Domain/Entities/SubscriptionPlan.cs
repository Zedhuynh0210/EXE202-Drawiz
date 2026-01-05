using System;
using System.Collections.Generic;

namespace DrawWiz.Domain.Entities;

public partial class SubscriptionPlan
{
    public int PlanId { get; set; }

    public string PlanName { get; set; } = null!;

    public decimal Price { get; set; }

    public int DurationMonths { get; set; }

    public int TargetId { get; set; }

    public string? Features { get; set; }

    public virtual PlanTarget Target { get; set; } = null!;

    public virtual ICollection<UserSubscription> UserSubscriptions { get; set; } = new List<UserSubscription>();
}
