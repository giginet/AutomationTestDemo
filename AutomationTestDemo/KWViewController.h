//
//  KWViewController.h
//  AutomationTestDemo
//
//  Created by giginet on 9/13/13.
//  Copyright (c) 2013 Kawaz. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface KWViewController : UIViewController
@property (nonatomic) NSInteger count;
@property (weak, nonatomic) IBOutlet UITextView *textView;

- (IBAction)pressMeButtonPressed:(id)sender;

@end
