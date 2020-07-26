# Average: O(long(n)) time | O(log(n)) space
# Worst: O(n) time | O(n) space

# Recursive
# def findClosestValueInBST(tree, target):
#     return findClosestValueInBstHelper(tree, target, float('inf'))


# def findClosestValueInBstHelper(tree, target, closest):
#     if tree is None:
#         return closest
#     if abs(target - closest) > abs(target - tree.value):
#         closest = tree.value
#     if target < tree.value:
#         return findClosestValueInBstHelper(tree.left, target, closest)
#     elif target > tree.value:
#         return findClosestValueInBstHelper(tree.right, target, closest)
#     else:
#         return closest


# Average: O(long(n)) time | O(1) space
# Worst: O(n) time | O(1) space

# Iterative
def findClosestValueInBST(tree, target):
    return findClosestValueInBstHelper(tree, target, float('inf'))


def findClosestValueInBstHelper(tree, target, closest):
    currentNode = tree
    while currentNode is not None:
        if abs(target - closest) > abs(target - currentNode.value):
            closest = currentNode.value
        if target < currentNode.value:
            currentNode = currentNode.left
        elif target > currentNode.value:
            currentNode = currentNode.right
        else:
            break
    return closest
