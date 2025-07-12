// API/users.ts
import {API_BASE_URL} from "@/api/BaseUrl";
import { getAccessTokenHelper } from "@/lib/authHelper";
import type { User } from "@/Types/interface";

export const getUserFn = async (page = 1, limit = 10, search = ''): Promise<{
  data: User[];
  total: number;
}> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    search: search
  });

  const fullUrl = `${API_BASE_URL}/users?${params.toString()}`;
  const token = getAccessTokenHelper();

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export const deleteUserFn = async (userId: number): Promise<void> => {
  const fullUrl = `${API_BASE_URL}/users/${userId}`;

  const response = await fetch(fullUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
}