const profileIterator = iterator(data);

document.addEventListener('DOMContentLoaded', getNextProfile);
document.getElementById('next').addEventListener('click', getNextProfile);

function getNextProfile() {
  const currentProfile = profileIterator.next().value;

  if (currentProfile !== undefined) {
    const { name, age, gender, lookingFor, location, image } = currentProfile;
    document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${name}</li>
        <li class="list-group-item">Age: ${age}</li>
        <li class="list-group-item">Location: ${location}</li>
        <li class="list-group-item">Preference: ${gender} looking for ${lookingFor}</li>
      </ul>
    `;

    document.getElementById('image-display').innerHTML = `
      <img src="${image}" alt="${name}" class="rounded" />
    `;
  } else {
    window.location.reload();
  }
}

function iterator(list) {
  let index = 0;
  return {
    next: () => {
      return index < list.length
        ? { value: list[index++], done: false }
        : { done: true };
    },
  };
}
