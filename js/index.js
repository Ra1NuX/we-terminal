const commands = [
    'echo Hello World > /dev/null',
    'ls -la',
    'grep \'error\' log.txt',
    'curl -O \'http://example.com/file.txt\'',
    'cat file.txt | sort',
    'tar -czvf archive.tar.gz \'folder/\'',
    'find . -type f -name \'*.txt\'',
    'du -sh .',
    'echo \'Hello World\' > /dev/null',
    'awk \'{print $1}\' file.csv',
    'ssh user@example.com',
    'wget \'https://example.com/file\'',
    'ping \'example.com\'',
    'mkdir \'new_directory\'',
    'touch \'new_file.txt\'',
    'scp file.txt user@example.com:\'/path/to/destination\'',
    'git clone \'https://github.com/username/repository.git\'',
    'docker run -d -p 80:80 nginx',
    'npm install \'express\'',
    'ps aux | grep node',
    'kill -9 $(pidof node)'
]

const specialCharacters = '!|>"\'';

const strings = commands.map(command => {
    const words = command.split(' ').filter(word => word.length > 0);
    words[0] = `<span class="text-lime-300">${words[0]}</span>`;

    for (let i = 1; i < words.length; i++) {
        if(words[i-1] === '|') {
            words[i] = `<span class="text-lime-300">${words[i]}</span>`
        } else if (specialCharacters.split('').some(char => words[i].startsWith(char) || words[i].endsWith(char))) {
            words[i] = `<span class="text-yellow-200">${words[i]}</span>`;
        }
        
    }

    return words.join(' ');
});

const typed = new Typed('.code', {
    strings,
    shuffle: true,
    smartBackspace: true,
    typeSpeed: 50,
    autoInsertCss: true,
    cursorChar: '|',
    loop: true,
})