export function isValidInstruction(instructions: string): boolean {
    
    const validCharacters: string[] = ['L', 'M', 'R'];

    for (let character of instructions) {
        if (!validCharacters.includes(character)) {
            return false;
        }
    }

    return true;
}