document.querySelectorAll('.person-tab').forEach(function(tab) {
	tab.addEventListener('shown.bs.tab', function(event) {
		const selected = event.target;
		const name = selected.dataset.name;
		const initials = selected.dataset.initials;
		const code = selected.dataset.code;
		const type = selected.dataset.type;
		const speciality = selected.dataset.speciality;
		const mobile = selected.dataset.mobile;
		const email = selected.dataset.email;
		const status = selected.dataset.status;
		const registrationDate = selected.dataset.date;

		document.getElementById('profileName').innerText = name;
		document.getElementById('profileAvatar').innerText = initials;
		document.getElementById('profileCode').innerText = code;

		document.getElementById('profileSectionTitle').innerText = type === 'Doctor' ? 'Doctor Profile Details' : 'Chemist Profile Details';

		document.getElementById('uniqueCode').value = code;
		document.getElementById('mobile').value = mobile;
		document.getElementById('email').value = email;

		const specialitySelect = document.getElementById('speciality');
		let found = false;
		for(let i = 0; i < specialitySelect.options.length; i++) {
			if(specialitySelect.options[i].text === speciality) {
				specialitySelect.selectedIndex = i;
				found = true;
				break;
			}
		}
		if(!found) {
			specialitySelect.selectedIndex = 0;
		}
	});
});

document.getElementById('personSearch').addEventListener('keyup', function() {
	const search = this.value.toLowerCase().trim();

	document.querySelectorAll('.person-tab').forEach(function(person) {
		const text = person.innerText.toLowerCase();
		if(text.includes(search)) {
			person.style.display = '';
		} else {
			person.style.display = 'none';
		}
	});
});

document.querySelectorAll('#modeTabs .nav-link').forEach(function(modeTab) {
	modeTab.addEventListener('shown.bs.tab', function() {
		document.getElementById('personSearch').value = '';
		document.querySelectorAll('.person-tab').forEach(function(person) {
			person.style.display = '';
		});
	});
});

function toggleSidebar() {
	document.getElementById('sidebar').classList.toggle('show');
}

document.querySelectorAll('.classification button').forEach(function(button) {
	button.addEventListener('click', function() {
		const parent = this.parentElement;
		parent.querySelectorAll('button').forEach(function(btn) {
			btn.classList.remove('active');
		});
		this.classList.add('active');
	});
});

$(document).ready(function() {
    $('#territory').select2();
	$('#brick').select2();
});