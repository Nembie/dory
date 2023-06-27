import { EventEmitter } from 'events';

export default class Dory {
	private static instance: Dory;

	private values: { [key: string]: any } = {};
	private eventEmitter = new EventEmitter();

	private constructor() {}

	public static getInstance(): Dory {
		if (!Dory.instance) {
			Dory.instance = new Dory();
		}
		return Dory.instance;
	}

	/**
	 * Set a global value.
	 * @param key The key to associate with the value.
	 * @param value The value to be stored.
	 */
	public set(key: string, value: any): void {
		this.values[key] = value;
		this.eventEmitter.emit('change', key, value);
	}

	/**
	 * Get a global value.
	 * @param key The key associated with the value.
	 * @returns The value associated with the key.
	 */
	public get(key: string): any {
		return this.values[key];
	}

	/**
	 * Remove a global value.
	 * @param key The key associated with the value to be removed.
	 */
	public remove(key: string): void {
		delete this.values[key];
		this.eventEmitter.emit('change', key, undefined);
	}

	/**
	 * Remove all global values.
	 */
	public removeAll(): void {
		this.values = {};
		this.eventEmitter.emit('change', null, undefined);
	}

	/**
	 * Check if a key exists in the global values.
	 * @param key The key to check.
	 * @returns True if the key exists, false otherwise.
	 */
	public has(key: string): boolean {
		return key in this.values;
	}

	/**
	 * Get all global values.
	 * @returns An object containing all the global values.
	 */
	public getAll(): { [key: string]: any } {
		return { ...this.values };
	}

	/**
	 * Add a change event listener.
	 * @param callback The callback function to be invoked when a value changes.
	 */
	public addChangeListener(callback: (key: string, value: any) => void): void {
		this.eventEmitter.on('change', callback);
	}

	/**
	 * Remove a change event listener.
	 * @param callback The callback function to be removed from the change event.
	 */
	public removeChangeListener(callback: (key: string, value: any) => void): void {
		this.eventEmitter.off('change', callback);
	}

	/**
	 * Add a change event listener that only triggers once.
	 * @param callback The callback function to be invoked when a value changes.
	 */
	public addListenerOnce(callback: (key: string, value: any) => void): void {
		const listener = (key: string, value: any) => {
			callback(key, value);
			this.eventEmitter.off('change', listener);
		};
		this.eventEmitter.on('change', listener);
	}

	/**
	 * Remove all change event listeners.
	 */
	public removeAllListeners(): void {
		this.eventEmitter.removeAllListeners('change');
	}
}