function checkPlagiarism() {

```
let text1 = document.getElementById("text1").value.trim();
let text2 = document.getElementById("text2").value.trim();

let result = document.getElementById("resultText");
let progressBar = document.getElementById("progressBar");

if (text1 === "" || text2 === "") {

    result.innerHTML =
        "⚠️ Please enter both texts.";

    progressBar.style.width = "0%";

    return;
}

// Convert text into lowercase words
let words1 = text1
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

let words2 = text2
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

// Remove duplicate words
let uniqueWords1 = [...new Set(words1)];
let uniqueWords2 = [...new Set(words2)];

// Find common words
let commonWords = uniqueWords2.filter(function(word) {

    return uniqueWords1.includes(word);

});

// Calculate similarity
let totalWords = new Set([
    ...uniqueWords1,
    ...uniqueWords2
]).size;

let similarity = 0;

if (totalWords > 0) {

    similarity =
        (commonWords.length / totalWords) * 100;

}

similarity = similarity.toFixed(2);

// Display result
progressBar.style.width = similarity + "%";

if (similarity >= 70) {

    result.innerHTML =
        "🚨 High Similarity Detected!<br>" +
        "Similarity: " + similarity + "%<br>" +
        "Possible plagiarism found.";

} else if (similarity >= 40) {

    result.innerHTML =
        "⚠️ Moderate Similarity<br>" +
        "Similarity: " + similarity + "%<br>" +
        "Some similar content was found.";

} else {

    result.innerHTML =
        "✅ Low Similarity<br>" +
        "Similarity: " + similarity + "%<br>" +
        "The texts appear mostly different.";

}
```

}

// Clear both text boxes
function clearText() {

```
document.getElementById("text1").value = "";
document.getElementById("text2").value = "";

document.getElementById("resultText").innerHTML =
    'Enter two texts and click "Check Plagiarism".';

document.getElementById("progressBar").style.width = "0%";
```

}

// Load example
function loadExample() {

```
document.getElementById("text1").value =
    "Cloud computing provides users with access to computing resources over the internet. " +
    "It allows organizations to store data and run applications without maintaining physical servers.";

document.getElementById("text2").value =
    "Cloud computing provides users with access to computing resources through the internet. " +
    "It allows organizations to store information and run applications without maintaining physical servers.";

checkPlagiarism();
```

}
