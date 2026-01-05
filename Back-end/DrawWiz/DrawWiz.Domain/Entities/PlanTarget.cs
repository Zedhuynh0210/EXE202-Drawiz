using System;
using System.Collections.Generic;

namespace DrawWiz.Domain.Entities;

public partial class PlanTarget
{
    public int TargetId { get; set; }

    public string TargetType { get; set; } = null!;

    public virtual ICollection<SubscriptionPlan> SubscriptionPlans { get; set; } = new List<SubscriptionPlan>();
}
