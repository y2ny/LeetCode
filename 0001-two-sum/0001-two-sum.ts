function twoSum(nums: number[], target: number): number[] {
    for (let i=0; i<nums.length; i++) {
        const operand = target - nums[i];

        const foundIndex = nums.findIndex((number, idx) => idx !== i && number === operand);

        if (foundIndex !== -1) {
            return [i, foundIndex];
        }

        continue;
    }
    
};