const fileList = document.getElementById('file-list');
const leakedSourcesButton = document.getElementById('leaked-sources');
const cs2CheatsButton = document.getElementById('cs2-cheats');

const leakedSources = [
    {
        name: 'Old Fataliy Source Code',
        downloadLink: 'https://cdn.discordapp.com/attachments/1230919559662538772/1231630341106696384/Fatality.win-Source-main.zip?ex=66f974a3&is=66f82323&hm=cab5aca3925d98693e77c06e62353c6656ebe4708bc759567fe84d921d6aa051&',
        virusTotal: 'https://www.virustotal.com',
        hybridAnalysis: 'https://www.hybrid-analysis.com'
    },
    {
        name: 'COMING SOON',
        downloadLink: 'downloads/source2.zip',
        virusTotal: 'https://www.virustotal.com/gui/file/source2.zip',
        hybridAnalysis: 'https://www.hybrid-analysis.com/sample/source2.zip'
    }
];

const cs2Cheats = [
    {
        name: 'Plague Crack',
        downloadLink: 'https://raw.githubusercontent.com/lwutz/scripthok/refs/heads/main/paguage%20v1%20fixed.zip',
        virusTotal: 'https://www.virustotal.com/gui/file/f2ecabc649b7db40d38a85bbdb8e4491adb613d242bbda3be3677975820d7268',
        hybridAnalysis: 'https://www.hybrid-analysis.com/sample/f2ecabc649b7db40d38a85bbdb8e4491adb613d242bbda3be3677975820d7268/66f74a95174e04b9ef0539b6'
    },
    {
        name: 'Weave cs2',
        downloadLink: 'https://cdn.discordapp.com/attachments/1289226333611753495/1289228876525862975/weave_fix_cracked_.dll?ex=66f960f4&is=66f80f74&hm=fee769f95cf1270bd2668c133b60a28f6cf85a8b360fdaadc4e16d02a92d213e&',
        virusTotal: 'https://www.virustotal.com/gui/file/cheat2.zip',
        hybridAnalysis: 'https://www.hybrid-analysis.com/sample/cheat2.zip'
    }
    {
        name: 'COMING SOON',
        downloadLink: '',
        virusTotal: 'https://www.virustotal.com/gui/file/cheat2.zip',
        hybridAnalysis: 'https://www.hybrid-analysis.com/sample/cheat2.zip'
    }
];


function populateFileList(files) {
    fileList.innerHTML = ''; // Clear previous items
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.innerHTML = `
            <a href="${file.downloadLink}" class="file-link">${file.name}</a>
            <div class="links">
                <a href="${file.virusTotal}" target="_blank">VirusTotal</a>
                <a href="${file.hybridAnalysis}" target="_blank">Hybrid Analysis</a>
            </div>
        `;
        fileList.appendChild(fileItem);
    });
    fileList.classList.remove('hidden'); 
}


leakedSourcesButton.addEventListener('click', () => {
    populateFileList(leakedSources); 
});

cs2CheatsButton.addEventListener('click', () => {
    populateFileList(cs2Cheats); 
});
