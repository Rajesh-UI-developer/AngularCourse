// unittesting.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UnittestingService, User } from './unittesting.service';

describe('UnittestingService', () => {
  let service: UnittestingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule for testing
      providers: [UnittestingService], // Provide the service
    });

    service = TestBed.inject(UnittestingService);
    httpMock = TestBed.inject(HttpTestingController); // Inject the HttpTestingController for mocking HTTP requests
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no unmatched HTTP requests are left after each test
  });

  // Test the getUsers method
  it('should retrieve users from the API via GET', () => {
    const dummyUsers: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321' },
    ];

    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(2); // Check if the correct number of users is returned
      expect(users).toEqual(dummyUsers); // Validate the actual response matches dummy data
    });

    const request = httpMock.expectOne(service.apiUrl); // Expect one GET request to the API URL
    expect(request.request.method).toBe('GET'); // Check that the request method is GET
    request.flush(dummyUsers); // Respond with mock data
  });

  // Test the createUser method
  it('should create a new user via POST', () => {
    const newUser: User = { id: 3, name: 'Sam Smith', email: 'sam@example.com', phone: '1122334455' };

    service.createUser(newUser).subscribe((user) => {
      expect(user).toEqual(newUser); // Expect the response to match the newly created user
    });

    const request = httpMock.expectOne(service.apiUrl); // Expect one POST request to the API URL
    expect(request.request.method).toBe('POST'); // Check that the request method is POST
    expect(request.request.body).toEqual(newUser); // Ensure that the POST request payload is correct
    request.flush(newUser); // Respond with the newly created user data
  });

  // Test error handling (optional)
  // it('should handle errors gracefully when the API returns an error', () => {
  //   const errorMessage = '500 Internal Server Error';

  //   service.getUsers().subscribe({
  //     next: () => fail('Expected an error, but got users instead'),
  //     error: (error) => {
  //       expect(error.status).toBe(500); // Ensure error status is 500
  //       expect(error.statusText).toBe(errorMessage); // Ensure correct error message is returned
  //     }
  //   });

  //   const request = httpMock.expectOne(service.apiUrl);
  //   request.flush(errorMessage, { status: 500, statusText: errorMessage }); // Simulate a server error
  // });
});
