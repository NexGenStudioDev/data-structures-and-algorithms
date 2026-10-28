# 1598. Crawler Log Folder

## 📝 The Goal
You are navigating through a file system, starting at the **main folder**. You are given a list of operations (`logs`) that tell you how to move around.

Your task is to figure out **how many steps** it would take to go back to the main folder from wherever you ended up.

## 🎮 The Rules (Operations)
Each item in the `logs` list is one of these three commands:

1.  **`"../"`**:
    *   **Action**: Move to the **parent folder** (go up one level).
    *   *Special Case*: If you are already in the main folder, stay there (you can't go up further).

2.  **`"./"`**:
    *   **Action**: **Stay** in the current folder. Do nothing.

3.  **`"x/"`** (where `x` is a folder name like `"d1/"`):
    *   **Action**: Move **into** the child folder named `x`.

## 🧪 Examples

### Example 1
**Input**: `logs = ["d1/","d2/","../","d21/","./"]`

1.  Start at Main.
2.  `"d1/"` → Move into `d1`. (Depth: 1)
3.  `"d2/"` → Move into `d2`. (Depth: 2)
4.  `"../"` → Go up one level. (Depth: 1)
5.  `"d21/"` → Move into `d21`. (Depth: 2)
6.  `"./"` → Stay here. (Depth: 2)

**Result**: You are 2 folders deep. To get back to Main, you need **2** `"../"` operations.
**Output**: `2`

### Example 2
**Input**: `logs = ["d1/","d2/","./","d3/","../","d31/"]`

1.  `"d1/"` → Depth: 1
2.  `"d2/"` → Depth: 2
3.  `"./"` → Depth: 2 (No change)
4.  `"d3/"` → Depth: 3
5.  `"../"` → Go up. Depth: 2
6.  `"d31/"` → Depth: 3

**Result**: You are 3 folders deep.
**Output**: `3`

### Example 3
**Input**: `logs = ["d1/","../","../","../"]`

1.  `"d1/"` → Depth: 1
2.  `"../"` → Go up. Depth: 0 (Back to Main)
3.  `"../"` → Already at Main. Depth: 0
4.  `"../"` → Already at Main. Depth: 0

**Result**: You are at the main folder.
**Output**: `0`

## 💡 How to Solve It (Simple Logic)
You don't need to actually track folder names. You only need to track **how deep** you are.

*   Use a **counter** (start at 0).
*   Loop through the logs:
    *   If `"../"`: Decrease counter by 1, but **never go below 0**.
    *   If `"./"`: Do nothing.
    *   If `"x/"`: Increase counter by 1.
*   The final counter value is your answer.

## 📋 Constraints
*   `1 <= logs.length <= 1000`
*   Folder names are simple (letters and digits).
*   All operations are valid (you won't be asked to move into a folder that doesn't exist).

## 🏷️ Topics
*   Array
*   String
*   Stack (Simulated)
*   Simulation