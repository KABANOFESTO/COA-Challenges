
# JavaScript Projects Collection

This repository contains three JavaScript projects:

1. **Contiguous Subarray Sum**
2. **String Transformation Based on Length**
3. **Responsive Gallery**

## Project 1: Contiguous Subarray Sum

### Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

### Example

- **Input**: `arr = [4, 2, 7, 1, 9, 5]`, `target = 17`
- **Result**: `true`
- **Explanation**: The subarray `[7, 1, 9]` sums up to `17`, which is equal to the target.

### Code

\`\`\`javascript
function hasSubarraySum(arr, target) {
    let sum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum > target && start <= end) {
            sum -= arr[start];
            start++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarraySum(arr, target));  // Result: true
\`\`\`

## Project 2: String Transformation Based on Length

### Problem Statement

Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 15, perform both operations in the order specified above.

### Code

\`\`\`javascript
function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return input.split('').reverse().join('');
    } else {
        return input;
    }
}

// Example usage:
console.log(transformString("Hamburger"));  // Result: "regrubmaH"
console.log(transformString("Pizza"));  // Result: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Result: "eikooCpihCetalocohC"
\`\`\`

## Project 3: Responsive Gallery

This is a simple responsive gallery using HTML, CSS, and JavaScript. The gallery displays a grid of animal images with their names and locations. It adjusts to different screen sizes, stacking images vertically on smaller screens.

### Features

- Responsive design: adjusts layout based on screen size.
- Displays animal images with names and locations.
- Animation using JavaScript.
- Simple and clean design.

### Getting Started

To get a local copy up and running follow these simple steps.

#### Prerequisites

You only need a web browser to view the gallery.

#### Installation

1. Clone the repo
   \`\`\`sh
   git clone https://github.com/KABANOFESTO/COA-Challenges.git
   \`\`\`

### Code

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Gallery</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .gallery-item {
            flex: 1 1 calc(33.333% - 10px);
            position: relative;
            margin: 5px;
        }
        .gallery-item img {
            width: 100%;
            height: auto;
        }
        .learn-more {
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 5px;
            display: none;
            transition: display 5s;
        }
        @media (max-width: 768px) {
            .gallery-item {
                flex: 1 1 100%;
            }
        }
    </style>
</head>
<body>
    <div class="gallery">
        <div class="gallery-item">
            <img src="animal1.jpg" alt="Animal 1">
            <div class="learn-more">Animal 1 - Location</div>
        </div>
        <div class="gallery-item">
            <img src="animal2.jpg" alt="Animal 2">
            <div class="learn-more">Animal 2 - Location</div>
        </div>
        <!-- More gallery items -->
    </div>

    <script>
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('.learn-more').style.display = 'inline-block';
            });
            item.addEventListener('mouseleave', () => {
                item.querySelector('.learn-more').style.display = 'none';
            });
        });
    </script>
</body>
</html>
\`\`\`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
