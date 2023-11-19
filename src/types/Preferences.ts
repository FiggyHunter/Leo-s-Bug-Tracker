export interface AvatarsState {
  panda: Avatar;
  owl: Avatar;
  fox: Avatar;
  dolphin: Avatar;
}

export interface Role {
  roleName: string;
  active: boolean;
}

export interface RolesState {
  developer: Role;
  qa: Role;
  generalist: Role;
}

export interface Avatar {
  label: string;
  imageUrl: string;
  active: boolean;
}

export interface AvatarsState {
  panda: Avatar;
  owl: Avatar;
  fox: Avatar;
  dolphin: Avatar;
}

export interface userPreferenceState {
  role: string;
  avatar: string;
}
