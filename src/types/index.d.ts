type Employee = {
  id: string;
  name: string;
  email: string;
  department?: string | null;
  businessUnit?: string | null;
  title?: string | null;
  grade?: string | null;
}

type UserCardProps = {
  user: Employee;
  role?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type SidebarItem = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}
type SidebarProps = {
  title?: string | React.ReactNode;
  beforeTitle?: React.ReactNode | string;
  afterTitle?: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  items: SidebarItem[];
}

type RowCardProps = React.PropsWithChildren<{
  icon: React.ReactNode;
  iconBgColor?: string;
  title: string;
  description?: string;
  extra?: React.ReactNode;
  collapsable?: boolean;
  collapsedDefaultValue?: boolean;
  className?: string;
  style?: React.CSSProperties;
}>