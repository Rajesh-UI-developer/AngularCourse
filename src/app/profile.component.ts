import { Component } from '@angular/core';
import { CanDeactivateGuard } from './candeactivate';

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    imports: [],
    template: `
        <h2>Edit Profile</h2>
        <form>
            <input type="text" placeholder="Username" />
            <button type="submit">Save</button>
        </form>
    `,
})
export class EditProfileComponent implements CanDeactivateGuard {
    hasUnsavedChanges = true; // Example flag to indicate unsaved changes
  
    canDeactivate(): boolean {
        if (this.hasUnsavedChanges) {
            return confirm('You have unsaved changes. Do you really want to leave?');
        }
        return true; // Allow navigation if no unsaved changes
    }
}
