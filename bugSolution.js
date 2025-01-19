```javascript
<div class="bg-gray-100 p-4">
  <h2 class="text-xl font-bold mb-2">Solution</h2>
  <p>This solution uses a simple re-render to address the dynamic styling issue.  For more complex applications, consider a robust state management solution.</p>
  <div id="myElement"></div>
</div>

<script>
  let showText = false;

  function toggleText() {
    showText = !showText;
    render();
  }

  function render() {
    const element = document.getElementById('myElement');
    element.innerHTML = ''; // Clear previous content

    if (showText) {
      element.innerHTML = '<p class="text-blue-500 font-bold">Text is now visible!</p>';
    } else {
      element.innerHTML = '<p>Text is hidden.</p>';
    }
  }

  render();
</script>
```