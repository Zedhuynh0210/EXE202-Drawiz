IF EXISTS (SELECT * FROM sys.databases WHERE name = 'DrawWizDB')
BEGIN
    DROP DATABASE DrawWizDB;
END
GO

CREATE DATABASE DrawWizDB;
GO

USE DrawWizDB;
GO

CREATE TABLE Users (
    UserId INT IDENTITY PRIMARY KEY,
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    AvatarUrl NVARCHAR(500),
    IsPremium BIT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    UpdatedAt DATETIME2 NULL
);
GO

CREATE TABLE Roles (
    RoleId INT IDENTITY PRIMARY KEY,
    RoleName NVARCHAR(50) NOT NULL UNIQUE,
    Description NVARCHAR(255)
);
GO

INSERT INTO Roles (RoleName, Description)
VALUES
('Normal', 'Free account'),
('Adult', 'Adult account'),
('Child', 'Child account');
GO

CREATE TABLE UserRoles (
    UserId INT NOT NULL,
    RoleId INT NOT NULL,
    PRIMARY KEY (UserId, RoleId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId),
    FOREIGN KEY (RoleId) REFERENCES Roles(RoleId)
);
GO

CREATE TABLE PlanTargets (
    TargetId INT IDENTITY PRIMARY KEY,
    TargetType NVARCHAR(20) NOT NULL UNIQUE
);
GO

INSERT INTO PlanTargets (TargetType)
VALUES ('Adult'), ('Child');
GO

CREATE TABLE SubscriptionPlans (
    PlanId INT IDENTITY PRIMARY KEY,
    PlanName NVARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    DurationMonths INT NOT NULL,
    TargetId INT NOT NULL,
    Features NVARCHAR(500),
    FOREIGN KEY (TargetId) REFERENCES PlanTargets(TargetId)
);
GO

INSERT INTO SubscriptionPlans (PlanName, Price, DurationMonths, TargetId, Features)
VALUES
('Adult Monthly', 4.99, 1, 1, 'Unlimited drawing, AI assistant, History tracking'),
('Adult Yearly', 49.99, 12, 1, 'Unlimited drawing, AI assistant, History tracking'),
('Adult Lifetime', 99.99, 0, 1, 'Lifetime access'),
('Child Monthly', 2.99, 1, 2, 'Safe drawing, Parent control, Learning mode'),
('Child Yearly', 29.99, 12, 2, 'Safe drawing, Parent control, Learning mode'),
('Child Lifetime', 59.99, 0, 2, 'Lifetime child access');
GO

CREATE TABLE ChildAccounts (
    ChildId INT IDENTITY PRIMARY KEY,
    ParentUserId INT NOT NULL,
    ChildName NVARCHAR(100) NOT NULL,
    AvatarUrl NVARCHAR(500),
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    IsActive BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (ParentUserId) REFERENCES Users(UserId)
);
GO

CREATE TABLE UserSubscriptions (
    SubscriptionId INT IDENTITY PRIMARY KEY,
    UserId INT NOT NULL,
    ChildId INT NULL,
    PlanId INT NOT NULL,
    StartDate DATETIME2 NOT NULL,
    EndDate DATETIME2 NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (UserId) REFERENCES Users(UserId),
    FOREIGN KEY (ChildId) REFERENCES ChildAccounts(ChildId),
    FOREIGN KEY (PlanId) REFERENCES SubscriptionPlans(PlanId)
);
GO

CREATE TABLE Albums (
    AlbumId INT IDENTITY PRIMARY KEY,
    OwnerUserId INT NULL,
    ChildId INT NULL,
    AlbumType NVARCHAR(50) NOT NULL,
    Title NVARCHAR(100) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (OwnerUserId) REFERENCES Users(UserId),
    FOREIGN KEY (ChildId) REFERENCES ChildAccounts(ChildId)
);
GO

CREATE TABLE Drawings (
    DrawingId INT IDENTITY PRIMARY KEY,
    AlbumId INT NOT NULL,
    ImageUrl NVARCHAR(500) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (AlbumId) REFERENCES Albums(AlbumId)
);
GO

CREATE TABLE FavoriteDrawings (
    UserId INT NOT NULL,
    DrawingId INT NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    PRIMARY KEY (UserId, DrawingId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId),
    FOREIGN KEY (DrawingId) REFERENCES Drawings(DrawingId)
);
GO

CREATE INDEX IX_Users_Email ON Users(Email);
CREATE INDEX IX_Albums_OwnerUserId ON Albums(OwnerUserId);
CREATE INDEX IX_Albums_ChildId ON Albums(ChildId);
CREATE INDEX IX_Drawings_AlbumId ON Drawings(AlbumId);
GO

--------------------------------------------------
-- USERS
--------------------------------------------------
INSERT INTO Users (Username, Email, PasswordHash, AvatarUrl, IsPremium)
VALUES
('adult_user',  'adult@drawwiz.com',  'HASH_ADULT_123',  'https://img/avatar/adult.png',  1),
('parent_user', 'parent@drawwiz.com', 'HASH_PARENT_123', 'https://img/avatar/parent.png', 1),
('normal_user', 'normal@drawwiz.com', 'HASH_NORMAL_123', 'https://img/avatar/normal.png', 0);
GO

--------------------------------------------------
-- USER ROLES
-- RoleId: 1 = Normal, 2 = Adult, 3 = Child
--------------------------------------------------
INSERT INTO UserRoles (UserId, RoleId)
VALUES
(1, 2),
(2, 2),
(3, 1);
GO

--------------------------------------------------
-- CHILD ACCOUNTS
--------------------------------------------------
INSERT INTO ChildAccounts (ParentUserId, ChildName, AvatarUrl)
VALUES
(2, 'Tom',  'https://img/avatar/child_tom.png'),
(2, 'Anna', 'https://img/avatar/child_anna.png');
GO

--------------------------------------------------
-- ALBUMS
--------------------------------------------------
INSERT INTO Albums (OwnerUserId, ChildId, AlbumType, Title)
VALUES
(1, NULL, 'FreeDraw',  'Adult Free Draw'),
(1, NULL, 'Challenge', 'Adult Challenges'),

(2, NULL, 'FreeDraw',  'Parent Free Draw'),

(NULL, 1, 'FreeDraw',  'Tom Free Draw'),
(NULL, 1, 'Challenge', 'Tom Challenges'),

(NULL, 2, 'FreeDraw',  'Anna Free Draw');
GO

--------------------------------------------------
-- DRAWINGS
--------------------------------------------------
INSERT INTO Drawings (AlbumId, ImageUrl)
VALUES
(1, 'https://img/drawings/adult_1.png'),
(1, 'https://img/drawings/adult_2.png'),

(4, 'https://img/drawings/tom_1.png'),
(4, 'https://img/drawings/tom_2.png'),

(6, 'https://img/drawings/anna_1.png');
GO

--------------------------------------------------
-- FAVORITE DRAWINGS
--------------------------------------------------
INSERT INTO FavoriteDrawings (UserId, DrawingId)
VALUES
(1, 3),
(1, 4),
(2, 5);
GO

--------------------------------------------------
-- USER SUBSCRIPTIONS
-- PlanId:
-- 1 Adult Monthly
-- 2 Adult Yearly
-- 3 Adult Lifetime
-- 4 Child Monthly
-- 5 Child Yearly
-- 6 Child Lifetime
--------------------------------------------------
INSERT INTO UserSubscriptions (UserId, ChildId, PlanId, StartDate, EndDate, IsActive)
VALUES
(1, NULL, 1, GETDATE(), DATEADD(MONTH, 1, GETDATE()), 1),
(2, 1,    4, GETDATE(), DATEADD(MONTH, 1, GETDATE()), 1),
(2, 2,    5, GETDATE(), DATEADD(YEAR,  1, GETDATE()), 1);
GO