using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp1
{
    public class ChainOfResponsibiityPattern
    {
        public void Main()
        {
            var unitVersionIDs = new Guid[] { Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid() };

            var previousClaim = new ClaimComparision
            {
                ClaimID = Guid.NewGuid(),

                ClaimUnitComparisons = new ClaimUnitComparison[]
                {
                    new ClaimUnitComparison { GradingWeight = 1, UmsScore = 10 , UnitVersionID = unitVersionIDs.ElementAt(0) },
                    new ClaimUnitComparison { GradingWeight = 2, UmsScore = 30 , UnitVersionID = unitVersionIDs.ElementAt(1) },
                    new ClaimUnitComparison { GradingWeight = 1, UmsScore = 20 , UnitVersionID = unitVersionIDs.ElementAt(2) },
                }
            };

            var currentClaim = new ClaimComparision
            {
                ClaimID = Guid.NewGuid(),

                ClaimUnitComparisons = new ClaimUnitComparison[]
                {
                    new ClaimUnitComparison { GradingWeight = 1, UmsScore = 30 , UnitVersionID = unitVersionIDs.ElementAt(0) },
                    new ClaimUnitComparison { GradingWeight = 2, UmsScore = 30 , UnitVersionID = unitVersionIDs.ElementAt(1) },
                }
            };

            // rules for GradedPre1617
            var GradedPre1617Chain = new MoreUnitsInClaimComparisonRule(
                                        new GradingWeightComparisonRule(null)
                                     );

            // how would you do the rules for say same Units in claim but one of those has better ext ass result
        }
    }

    public class ClaimUnitComparison
    {
        public Guid UnitVersionID { get; set; }
        public int GradingWeight { get; set; }

        public double UmsScore { get; set; }
    }

    public class ClaimComparision
    {
        public Guid ClaimID { get; set; }

        public IReadOnlyCollection<ClaimUnitComparison> ClaimUnitComparisons { get; set; }
    }

    public class ClaimComparisonResult
    {
        public bool CanSubmitClaim { get; set; }

        public Guid WinnerClaimID { get; set; }
    }


    // chain of responsibility pattern
    public interface IClaimComparisonRule
    {
        IClaimComparisonRule Successor { get; }

        ClaimComparisonResult Compare(ClaimComparision previousClaim, ClaimComparision currentClaim);
    }


    // Certification Model - GradedPre1617
    public class GradingWeightComparisonRule : IClaimComparisonRule
    {
        public GradingWeightComparisonRule(IClaimComparisonRule successor)
        {
            this.Successor = successor;
        }

        public IClaimComparisonRule Successor { get; private set; }

        // say this is for model 3 - so is grading weight only - so given your certification model will have a set of rules to choose from or whatever.
        public ClaimComparisonResult Compare(ClaimComparision previousClaim, ClaimComparision currentClaim)
        {
            var totalWeightPreviousClaim = previousClaim.ClaimUnitComparisons.Sum(cu => cu.GradingWeight);
            var totalWeightCurrentClaim = currentClaim.ClaimUnitComparisons.Sum(cu => cu.GradingWeight);

            // when first rule fails return end i.e ClaimComparisonResult.Success = false then cannot submit the current claim
            if (totalWeightCurrentClaim < totalWeightPreviousClaim)
            {
                return new ClaimComparisonResult
                {
                    CanSubmitClaim = false,
                    WinnerClaimID = previousClaim.ClaimID
                };
            }

            if (this.Successor != null)
            {
                return Successor.Compare(previousClaim, currentClaim);
            }

            return new ClaimComparisonResult
            {
                CanSubmitClaim = true, // shit name but principle holds
                WinnerClaimID = currentClaim.ClaimID
            };
        }
    }

    // when current claim has more units!
    public class MoreUnitsInClaimComparisonRule : IClaimComparisonRule
    {
        public MoreUnitsInClaimComparisonRule(IClaimComparisonRule successor)
        {
            this.Successor = successor;
        }

        public IClaimComparisonRule Successor { get; private set; }

        public ClaimComparisonResult Compare(ClaimComparision previousClaim, ClaimComparision currentClaim)
        {
            var previousClaimUnitCount = previousClaim.ClaimUnitComparisons.Count();
            var currentClaimUnitCount = currentClaim.ClaimUnitComparisons.Count();

            // when first rule fails return end i.e ClaimComparisonResult.Success = false then cannot submit the current claim
            if (currentClaimUnitCount < previousClaimUnitCount)
            {
                return new ClaimComparisonResult
                {
                    CanSubmitClaim = false,
                    WinnerClaimID = previousClaim.ClaimID
                };
            }

            if (this.Successor != null)
            {
                return Successor.Compare(previousClaim, currentClaim);
            }

            return new ClaimComparisonResult
            {
                CanSubmitClaim = true, // shit name but principle holds
                WinnerClaimID = currentClaim.ClaimID
            };
        }
    }

    // etc add more rules
}
