# O(log(n)) time | O(log(n)) space
def shiftedBinarySearch(array, target):
    return shiftedBinarySearchHelper(array, target, 0, len(array) - 1)


def shiftedBinarySearchHelper(array, target, left, right):
    if left > right:
        return -1
    middle = (left + right) // 2
    potentialMatch = array[middle]
    leftNum = array[left]
    rightNum = array[right]
    if target == potentialMatch:
        return middle
    elif leftNum <= potentialMatch:
        if target < potentialMatch and target >= leftNum:
            return shiftedBinarySearchHelper(array, target, left, middle - 1)
        else:
            return shiftedBinarySearchHelper(array, target, middle + 1, right)
    else:
        if target > potentialMatch and target <= rightNum:
            return shiftedBinarySearchHelper(array, target, middle + 1, right)
        else:
            return shiftedBinarySearchHelper(array, target, left, middle - 1)


sample1 = [45, 61, 71, 72, 73, 0, 1, 21, 33, 45]
sample2 = [61, 71, 72, 73, 0, 1, 21, 33, 45, 45]
sample3 = [45, 61, 71, 72, 73, 0, 1, 33]
#                          l   m     r
#          0   1   2   3   4   5  6  7   8   9

print(shiftedBinarySearch(sample1, 33))
print(shiftedBinarySearch(sample2, 33))
print(shiftedBinarySearch(sample3, 33))
