// Type definitions for the View Transitions API
// https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API

interface Document {
  /**
   * The startViewTransition() method of the Document interface starts a view transition animation.
   * @param callback A function that updates the DOM to the new state.
   * @returns A ViewTransition object that can be used to track the transition's progress.
   */
  startViewTransition(callback: () => Promise<void> | void): ViewTransition;
}

interface ViewTransition {
  /**
   * A Promise that resolves once the DOM update is complete.
   */
  readonly updateCallbackDone: Promise<void>;

  /**
   * A Promise that resolves once the transition animation is complete.
   */
  readonly ready: Promise<void>;

  /**
   * A Promise that resolves once the transition is finished.
   */
  readonly finished: Promise<void>;

  /**
   * Skips the animation part of the view transition, but still waits for the DOM to update.
   */
  skipTransition(): void;
}
